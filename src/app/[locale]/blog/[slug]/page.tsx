import React from 'react'
import { notFound } from 'next/navigation'
import { getBlogs } from '../../../../../lib/get-blogs'
import type { Metadata } from 'next'
import initTranslations from '@/app/i18n/i18n'
import TranslationsProvider from '@/app/components/TranslationProvider'
import LanguageSwitcher from '@/app/components/LanguageSwitcher'
import { CustomMDX } from '@/app/components/mdx/mdx'

export async function generateMetadata({
  params,
}: {
  params: any
}): Promise<Metadata | undefined> {
  const blog = getBlogs(params.locale).find((post) => post.slug === params.slug)

  if (!blog) {
    return notFound()
  }

  //   let {
  //     title,
  //   } = blog.metadata

  //   return {
  //     title
  //   }
}

const i18nNamespaces = ['common']

export default async function page({ params }: { params: any }) {
  const { t, resources } = await initTranslations(params.locale, ['common'])

  const blog = getBlogs(params.locale).find((post) => post.slug === params.slug)
  if (!blog) {
    return notFound()
  }

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={params.locale}
      resources={resources}
    >
      <main>
        <h1>Eldoka na wolno {blog.metadata.title}</h1>
        <article className="prose prose-zinc mx-auto my-10 max-w-none dark:prose-invert md:prose-lg lg:prose-xl">
          <CustomMDX>{blog.content}</CustomMDX>
        </article>
      </main>
    </TranslationsProvider>
  )
}
