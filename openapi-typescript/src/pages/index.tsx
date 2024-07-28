import { paths, components } from "@/types/type";

type GetScheduleDetailResponse = components["schemas"];

const getScheduleDetail = async (scheduleId: number): Promise<GetScheduleDetailResponse> => {
  const response = await fetch(`/schedule/${scheduleId}`);
  return response.json();
};

export default function Home() {
  return <></>;
}
