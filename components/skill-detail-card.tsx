"use client";

import { Code, Layers, Settings, Wrench } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import useMediaQuery from "@/hooks/use-media-query";
import { getCategoryName } from "@/lib/utils";

// カテゴリごとにアイコンを取得する関数
const getCategoryIcon = (category: string) => {
  switch (category) {
    case "programming":
      return <Code className="h-3.5 w-3.5 text-primary" />;
    case "frameworks":
      return <Layers className="h-3.5 w-3.5 text-primary" />;
    case "tools":
      return <Wrench className="h-3.5 w-3.5 text-primary" />;
    case "others":
      return <Settings className="h-3.5 w-3.5 text-primary" />;
    default:
      return null;
  }
};

// スキル詳細表示コンポーネント（レスポンシブ対応）
interface SkillDetailProps {
  skill: {
    name: string;
    experience: string;
    details: string;
  };
  category: string;
  locale: string;
  t: (key: string, params?: Record<string, string>) => string;
}

export default function SkillDetailCard({
  skill,
  category,
  locale,
  t,
}: SkillDetailProps) {
  const isMobile = useMediaQuery("(max-width: 768px)");

  // モバイルではDialogを使用、デスクトップではTooltipを使用
  if (isMobile) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Badge
            variant="outline"
            className="cursor-pointer transition-all active:scale-95 bg-white dark:bg-neutral-800/50 border-slate-200 dark:border-neutral-700 text-slate-700 dark:text-neutral-300 hover:bg-slate-50 dark:hover:bg-neutral-700/30 py-1 px-2.5"
          >
            {skill.name}
          </Badge>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              {getCategoryIcon(category)}
              <span className="text-slate-900 dark:text-white">
                {skill.name}
              </span>
            </DialogTitle>
            <DialogDescription>
              {getCategoryName(category, locale)} • {skill.experience}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 pt-3">
            <p className="leading-relaxed text-slate-700 dark:text-neutral-200">
              {skill.details}
            </p>

            {/* 追加情報セクション - モバイル用の追加コンテンツ */}
            <div className="mt-2 p-3 rounded-md bg-slate-100 dark:bg-neutral-700/20 border">
              <h4 className="text-sm font-medium mb-2">
                {t("skillDetail.relatedProjects")}
              </h4>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                {category === "programming" && skill.name === "Python" && (
                  <>
                    <li>{t("skillDetail.python.dataAnalysis")}</li>
                    <li>{t("skillDetail.python.automation")}</li>
                  </>
                )}
                {category === "frameworks" && skill.name === "React" && (
                  <>
                    <li>{t("skillDetail.react.webService")}</li>
                    <li>{t("skillDetail.react.adminUI")}</li>
                  </>
                )}
                <li>{t("skillDetail.utilization")}</li>
              </ul>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  // デスクトップ用Tooltip表示
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Badge
            variant="outline"
            className="cursor-help transition-all duration-200 hover:scale-105 hover:border-primary/50 hover:bg-primary/5 bg-white dark:bg-neutral-800/50 border-slate-200 dark:border-neutral-700 text-slate-700 dark:text-neutral-300 py-1 px-2.5"
          >
            {skill.name}
          </Badge>
        </TooltipTrigger>
        <TooltipContent
          side="top"
          align="center"
          sideOffset={5}
          className="max-w-xs p-3 z-50 animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 duration-150 shadow-lg rounded-md bg-white dark:bg-neutral-800 border-2 border-slate-200 dark:border-neutral-700"
        >
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                {getCategoryIcon(category)}
                <p className="font-bold text-base text-slate-900 dark:text-white">
                  {skill.name}
                </p>
              </div>
              <Badge variant="secondary" className="ml-2 text-xs font-medium">
                {skill.experience}
              </Badge>
            </div>
            <Separator className="bg-slate-200 dark:bg-neutral-700" />
            <div className="pt-1">
              <p className="text-sm leading-relaxed text-slate-700 dark:text-neutral-200">
                {skill.details}
              </p>
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
