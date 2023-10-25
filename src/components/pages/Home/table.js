const tblHead = [
  {
    title: '位置',
  },
  {
    title: '馬匹編號',
  },
  {
    title: '馬名',
  },
  {
    title: '騎師',
  },
  {
    title: '練馬師',
  },
  {
    title: '時間',
  },
  {
    title: '距離 ',
  },
  {
    title: '獨贏賠率',
  },
];

const tblRow = [
  {
    id: '1',
    num: '8',
    name: '順利取勝',
    rider: '嘉里',
    trainer: '蔡約翰',
    time: '1:10.34',
    distance: '-',
    payRate: '12',
  },
  {
    id: '2',
    num: '8',
    name: '騰飛塔',
    rider: '潘頓',
    trainer: '沈集成',
    time: '1:10.47',
    distance: '3/4',
    payRate: '9.2',
  },
  {
    id: '3',
    num: '3',
    name: '我為您',
    rider: '周俊樂',
    trainer: '伍鵬志',
    time: '1:10.47',
    distance: '3/4',
    payRate: '8.2',
  },
  {
    id: '4',
    num: '5',
    name: '特攻',
    rider: '布文',
    trainer: '賀賢',
    time: '1:10.57',
    distance: '1-1/2',
    payRate: '2.7',
  },
  {
    id: '5',
    num: '13',
    name: '九秒九',
    rider: '何澤堯',
    trainer: '方嘉柏',
    time: '1:10.60',
    distance: '1-1/2',
    payRate: '9.7',
  },
  {
    id: '6',
    num: '6',
    name: '創奇蹟',
    rider: '潘明輝',
    trainer: '文家良',
    time: '1:11.35',
    distance: '6-1/4',
    payRate: '4.1',
  },
];

const table = () => {
  return (
    <div className='flex flex-col'>
      <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
          <div className='overflow-hidden'>
            <table className='min-w-full text-left text-sm font-light'>
              <thead className='border-b text-amber-500 font-medium dark:border-neutral-500 dark:bg-neutral-600'>
                <tr>
                  {tblHead.map((load) => (
                    <th key={load.title} scope='col' className='px-6 py-4 text-18px'>
                      {load.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tblRow.map((load) => (
                  <tr
                    key={load.id}
                    className='bg-none bg-roww border-b border-amber-500 text-white text-16px'
                  >
                    <td className='whitespace-nowrap px-6 py-4 font-medium'>{load.id}</td>
                    <td className='whitespace-nowrap px-6 py-4'>{load.num}</td>
                    <td className='whitespace-nowrap px-6 py-4'>{load.name}</td>
                    <td className='whitespace-nowrap px-6 py-4'>{load.rider}</td>
                    <td className='whitespace-nowrap px-6 py-4'>{load.trainer}</td>
                    <td className='whitespace-nowrap px-6 py-4'>{load.time}</td>
                    <td className='whitespace-nowrap px-6 py-4'>{load.distance}</td>
                    <td className='whitespace-nowrap px-6 py-4'>{load.payRate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default table;
