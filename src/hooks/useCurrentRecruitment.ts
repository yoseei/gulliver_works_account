/**
 * 選択中のrecruitmentを管理するHook
 * **/

import { atom, useRecoilState } from "recoil";
import { RecruitmentDataType } from "../data/recruitment";

const recruitmentState = atom<RecruitmentDataType | undefined>({
  key: "recruitment",
  default: undefined,
});

export function useCurrentRecruitment() {
  const [recruitment, setRecruitment] = useRecoilState(recruitmentState);

  return { recruitment, setRecruitment };
}
