import React from 'react';
import Head from 'next/head';
import { FAQPageJsonLd, NextSeo } from 'next-seo';
import { getDomain } from '@utilities/dev';
import { fetchImage } from '@service/strapi';
import { asFaq } from '@utilities';
import { faqDefault } from '@constants';
import GATag from './GATag';

export default function HeadNextSeo({ dataSource }) {
  const { seo, linkTo } = dataSource;
  return (
    <div>
      <Head>
        <GATag />

        <link
          href='https://fonts.googleapis.com/css2?family=Inter&display=optional'
          rel='stylesheet'
        />

        <link rel='apple-touch-icon' sizes='57x57' href='/favicon/apple-icon-57x57.png' />
        <link rel='apple-touch-icon' sizes='60x60' href='/favicon/apple-icon-60x60.png' />
        <link rel='apple-touch-icon' sizes='72x72' href='/favicon/apple-icon-72x72.png' />
        <link rel='apple-touch-icon' sizes='76x76' href='/favicon/apple-icon-76x76.png' />
        <link rel='apple-touch-icon' sizes='114x114' href='/favicon/apple-icon-114x114.png' />
        <link rel='apple-touch-icon' sizes='120x120' href='/favicon/apple-icon-120x120.png' />
        <link rel='apple-touch-icon' sizes='144x144' href='/favicon/apple-icon-144x144.png' />
        <link rel='apple-touch-icon' sizes='152x152' href='/favicon/apple-icon-152x152.png' />
        <link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-icon-180x180.png' />
        <link
          rel='icon'
          type='image/png'
          sizes='192x192'
          href='/favicon/android-icon-192x192.png'
        />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='96x96' href='/favicon/favicon-96x96.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png' />
        <link rel='manifest' href='/manifest.json' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='msapplication-TileImage' content='/favicon/ms-icon-144x144.png' />
        <meta name='theme-color' content='#ffffff' />

        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <link rel='icon' type='image/x-icon' href='/favicon.ico' />
        <link rel='shortcut icon' type='image/x-icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='keywords' content={seo?.keywords || ''} />

        {seo?.no_index && <meta name='robots' content='all' />}
      </Head>
      <NextSeo
        title={seo?.title ? seo?.title.substring(0, 70) : 'A title of page'}
        description={
          seo?.description ? seo?.description.substring(0, 320) : 'A short description goes here.'
        }
        canonical={`${getDomain()}${linkTo}`}
        openGraph={{
          url: `${getDomain()}${linkTo}`,
          title: seo?.title.substring(0, 70),
          description: seo?.description
            ? seo?.description.substring(0, 320)
            : 'A short description goes here.',
          images:
            seo?.images?.length > 0
              ? seo?.images?.map((load) => ({
                  url: load.local ? `${getDomain()}${load.url}` : fetchImage(load.url),
                }))
              : [
                  {
                    url: `${getDomain()}/favicon/android-icon-192x192.png`,
                  },
                ],
          site_name: '盛世金融集团',
          type: 'website',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />

      <FAQPageJsonLd mainEntity={seo?.faq?.length > 0 ? asFaq(seo?.faq) : faqDefault} />
    </div>
  );
}
