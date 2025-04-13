import Link from "next/link";
import { useTranslations } from "next-intl";
import { HomeIcon, ArrowLeftIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  const t = useTranslations("notFound");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4">
      <div className="text-center space-y-6 max-w-md">
        <h1 className="text-9xl font-bold text-primary">404</h1>

        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight">
            {t("title")}
          </h2>
          <p className="text-muted-foreground">{t("description")}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button asChild variant="default">
            <Link href="/">
              <HomeIcon className="mr-2 h-4 w-4" />
              {t("home")}
            </Link>
          </Button>

          <Button asChild variant="outline">
            <Link href="javascript:history.back()">
              <ArrowLeftIcon className="mr-2 h-4 w-4" />
              {t("back")}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
