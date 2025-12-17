import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: 'https://bearhumans.github.io/dopamine_cutter_landing/sitemap.xml',
    }
}
