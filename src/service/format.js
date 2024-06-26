import { LayoutTitle } from '@components/common/Article/title';
import { getCMSDomain } from '@utilities/dev';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const textColor = (props) => {
  let content = props.children ? props.children[0] : '';
  content = typeof content === 'string' && content.replace('(frame)', '');
  content = typeof content === 'string' && content.replace('(frame-2)', '');
  content = typeof content === 'string' && content.replace('(frame-3)', '');
  content = typeof content === 'string' && content.replace('(frame-4)', '');
  content = typeof content === 'string' && content.replace('(center)', '');
  content = typeof content === 'string' && content.replace('(right)', '');
  const regExp = /\(([^)]+)\)/;
  const condition = regExp.exec(content);
  const getClass = condition !== null ? `${condition[1]}` : 'black';
  const text = condition !== null ? content.replace(`(${condition[1]})`, '') : props.children;
  return {
    getClass,
    text,
    condition,
  };
};

const TextFrame = ({ children, data }) => {
  const content = data.children ? data.children[0] : '';
  let condition = null;
  if (content.includes('(frame)')) {
    condition = 'frame';
  } else if (content.includes('(frame-2)')) {
    condition = 'frame-2';
  } else if (content.includes('(frame-3)')) {
    condition = 'frame-3';
  } else if (content.includes('(frame-4)')) {
    condition = 'frame-4';
  }

  const alignCenter = content.includes('(center)');
  const alignRight = content.includes('(right)');
  let alignment = 'text-left';
  if (alignCenter) {
    alignment = 'text-center';
  } else if (alignRight) {
    alignment = 'text-right';
  }

  switch (condition) {
    case 'frame':
      return (
        <LayoutTitle>
          <div className={`clear-both ${alignment}`}>{children}</div>
        </LayoutTitle>
      );

    default:
      return children;
  }
};

export const RichTextMarkdown = ({ content }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        // Rewrite `em`s (`*like so*`) to `i` with a red foreground color.
        blockquote: ({ node, ...props }) => {
          return (
            <div className='bg-quote px-5 py-2 w-full rounded-lg whitespace-pre-line'>
              {props.children}
            </div>
          );
        },
        a: ({ node, ...props }) => {
          const { getClass, text } = textColor(props);
          return (
            <a href={props.href} style={{ color: getClass }}>
              {text}
            </a>
          );
        },
        img: ({ node, ...props }) => {
          const left = props.src.includes('(left)');
          const right = props.src.includes('(right)');
          const center = props.src.includes('(center)');
          const video = props.src.includes('(video)');
          let classTag = '';
          let { src } = props;

          if (left) {
            classTag = 'float-left mr-4 mb-4';
            src = props.src.replace('(left)', '');
          } else if (right) {
            classTag = 'float-right ml-4 mb-4';
            src = props.src.replace('(right)', '');
          } else if (center) {
            classTag = 'mx-auto';
            src = props.src.replace('(center)', '');
          } else if (video) {
            src = props.src.replace('(video)', '');
          }
          return video ? (
            <div className='w-full h-[150px] md:h-[500px] relative'>
              <iframe
                src={`https://www.youtube.com/embed/${src}?controls=0`}
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;'
                allowFullScreen={false}
                className='w-full h-full'
                width='1280'
                height='720'
              />
            </div>
          ) : (
            <a href='/'>
              <img
                src={`${getCMSDomain()}${src}`}
                alt={props.alt}
                title={props.alt}
                className={`${classTag} lazyload`}
              />
            </a>
          );
        },
        br: () => {
          return <br clear='all' />;
        },
        em: ({ node, ...props }) => {
          const { getClass, text, condition } = textColor(props);
          return condition === null ? (
            <i>{text}</i>
          ) : (
            <span style={{ color: getClass }}>{text}</span>
          );
        },
        strong: ({ node, ...props }) => {
          const { getClass, text } = textColor(props);
          return (
            <strong style={{ color: getClass }} className='font-bolded'>
              {text}
            </strong>
          );
        },
        h1: ({ node, ...props }) => {
          const { getClass, text } = textColor(props);
          return (
            <TextFrame data={props}>
              <h1 style={{ color: getClass }}>{text}</h1>
            </TextFrame>
          );
        },
        h2: ({ node, ...props }) => {
          const { getClass, text } = textColor(props);
          return (
            <TextFrame data={props}>
              <h2 style={{ color: getClass }}>{text}</h2>
            </TextFrame>
          );
        },
        h3: ({ node, ...props }) => {
          const { getClass, text } = textColor(props);
          return (
            <TextFrame data={props}>
              <h3 style={{ color: getClass }}>{text}</h3>
            </TextFrame>
          );
        },
        h4: ({ node, ...props }) => {
          const { getClass, text } = textColor(props);
          return (
            <TextFrame data={props}>
              <h4 style={{ color: getClass }}>{text}</h4>
            </TextFrame>
          );
        },
        h5: ({ node, ...props }) => {
          const { getClass, text } = textColor(props);
          return (
            <TextFrame data={props}>
              <h5 style={{ color: getClass }}>{text}</h5>
            </TextFrame>
          );
        },
        h6: ({ node, ...props }) => {
          const { getClass, text } = textColor(props);
          return (
            <TextFrame data={props}>
              <h6 style={{ color: getClass }}>{text}</h6>
            </TextFrame>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
};
