import initTranslations from '@/app/i18n/i18n'
import ClientComponent from '@/app/components/clientComponent'
import TranslationsProvider from '../components/TranslationProvider'
import LanguageSwitcher from '../components/LanguageSwitcher'
import { cn } from '../helpers/cn'

const i18nNamespaces = ['common']

export default async function Home({ params: { locale } }: any) {
    const { t, resources } = await initTranslations(locale, ['common'])

    return (
        <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}
        >
            <main className="px-4 md:px8 max-w-8xl mx-auto ">
                <ClientComponent />
                <LanguageSwitcher />
                <h2>{t('title')}</h2>
                <div>title</div>
            </main>
        </TranslationsProvider>
    )
}
