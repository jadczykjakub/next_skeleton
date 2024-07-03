import initTranslations from "@/app/i18n/i18n";
import ClientComponent from "@/app/components/clientComponent";
import TranslationsProvider from "../components/TranslationProvider";
import LanguageSwitcher from "../components/LanguageSwitcher";

const i18nNamespaces = ["common"];

export default async function Home({ params: { locale } }: any) {
  const { t, resources } = await initTranslations(locale, ["common"]);
  console.log("hello world");
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>title</h1>
        <ClientComponent />
        <LanguageSwitcher />
        <h2>{t("title")}</h2>
      </main>
    </TranslationsProvider>
  );
}
