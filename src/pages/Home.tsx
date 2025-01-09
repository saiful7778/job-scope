import Spinner from "@/components/Spinner";
import useQuery from "@/hooks/useQuery";
import { Link } from "react-router";
import moment from "moment";

const Home: React.FC = () => {
  const { data, isLoading, isError } = useQuery<
    {
      title: string;
      description: string;
      created_by: number;
      created_at: string;
    }[]
  >("/api/job/");

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
    <div className="mx-auto flex w-full flex-col gap-4 md:w-[60%]">
      {data?.length === 0 ? (
        <div>No data found</div>
      ) : (
        data?.map((jobItem, idx) => {
          return (
            <Link
              className="group flex flex-col gap-2 rounded-md border p-4"
              key={`job-${idx}`}
              to={`/job/${jobItem.created_by}`}
            >
              <span className="text-xl font-bold group-hover:underline">
                {jobItem.title}
              </span>
              <span className="text-sm">{jobItem.description}</span>
              <span className="text-sm text-muted-foreground">{moment(jobItem.created_at).fromNow()}</span>
            </Link>
          );
        })
      )}
    </div>
  );
};

export default Home;
