import { IEvent } from "@/lib/database/models/event.model";
import EventCard from "./EventCard";
import Pagination from "./Pagination";

type CollectionProps = {
  data: IEvent[];
  emptyTitle: string;
  emptyStateSubtext: string;
  collectionType?: "All_Events" | "Events_Organized" | "My_Tickets";
  page: number | string;
  totalPages?: number;
  urlParamName?: string;
};

const Collection = ({
  data = [],
  emptyTitle,
  emptyStateSubtext,
  collectionType,
  page,
  totalPages,
  urlParamName,
}: CollectionProps) => {
  const hasEvents = Array.isArray(data) && data.length > 0;

  return (
    <>
      {hasEvents ? (
        <div className="flex flex-col items-center gap-10">
          <ul className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-10">
            {data.map((event) => (
              <li key={event._id} className="flex justify-center w-full">
                <EventCard
                  event={event}
                  hasOrderLink={collectionType === "Events_Organized"}
                  hidePrice={collectionType === "My_Tickets"}
                />
              </li>
            ))}
          </ul>

          {totalPages && totalPages > 1 && (
            <Pagination
              urlParamName={urlParamName}
              page={page}
              totalPages={totalPages}
            />
          )}
        </div>
      ) : (
        <div className="wrapper min-h-52 w-full gap-3 bg-grey-50 text-center rounded-lg flex flex-col justify-center">
          <h3 className="xl:h3-bold p-bold-20">{emptyTitle}</h3>
          <p className="p-regular-16">{emptyStateSubtext}</p>
        </div>
      )}
    </>
  );
};

export default Collection;