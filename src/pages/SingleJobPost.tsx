import Spinner from "@/components/Spinner";
import useQuery from "@/hooks/useQuery";
import moment from "moment";
import { useParams } from "react-router";

const SingleJobPost: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();

  const { data, isLoading, isError } = useQuery<{
    title: string;
    description: string;
    created_by: number;
    created_at: string;
  }>(`/api/job/${postId}`);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-4">
        <Spinner size={20} />
      </div>
    );
  }

  if (isError) {
    return <div className="text-center text-red-600">Something went wrong</div>;
  }

  return (
    <div className="space-y-2">
      <h1 className="text-3xl font-bold">{data?.title}</h1>
      <p className="text-sm">{moment(data?.created_at).format("DD/MM/YY hh:mm a")}</p>
      <p>{data?.description}</p>
    </div>
  );
};

export default SingleJobPost;
