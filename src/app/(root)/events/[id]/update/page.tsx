import EventForm from "@/components/shared/EventForm";
import { getEventById } from "@/lib/actions/event.actions";
import { auth } from "@clerk/nextjs/server";

type UpdateEventProps = {
  params: Promise<{
    id: string;
  }>;
};

const UpdateEvent = async (props: UpdateEventProps) => {
  const params = await props.params;

  const {
    id
  } = params;

  const { sessionClaims } = await auth();
  const userId = sessionClaims?.userId as string;

  const event = await getEventById(id);
  // console.log(event);

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">
          Update Event
        </h3>
      </section>

      <div className="wrapper max-sm:px-2 my-8">
        <EventForm
          type="Update"
          eventId={event._id}
          event={event}
          userId={userId}
        />
      </div>
    </>
  );
};

export default UpdateEvent;