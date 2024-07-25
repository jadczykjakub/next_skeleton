import fs from 'fs'
import path from 'path'
import { cache } from 'react'
import matter from 'gray-matter'


function getBlogFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

type Metadata = {
    title: string;
    publishedAt: string;
    summary: string;
    tags: string[];
    published: boolean;
    image?: string;
  };

// export const getBlogs = (locale: string) => cache(() => {


// })


export const getBlogs = (locale: string) => {
    const BLOGS_FOLDER = path.join(process.cwd(), 'content', 'blogs', locale)
    
      const posts = getBlogFiles(BLOGS_FOLDER)
    
      return posts.map((post) => {
        const filePath = path.join(BLOGS_FOLDER, post)
        const fileContent = fs.readFileSync(filePath, 'utf-8')
        const { data, content } = matter(fileContent)
    
        return {
            metadata: data as Partial<Metadata>,
            content,
            slug: post.replace(/\.mdx?$/, ''),
        }
      })
}