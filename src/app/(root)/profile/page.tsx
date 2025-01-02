import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import Collection from "@/components/shared/Collection";
import { auth } from "@clerk/nextjs/server";
import User from "@/lib/database/models/user.model";
import { getOrdersByUser } from "@/lib/actions/order.actions";
import { getEventsByUser } from "@/lib/actions/event.actions";
import { IOrder } from "@/lib/database/models/order.model";
import { SearchParamProps } from "@/types";

const ProfilePage = async (props: SearchParamProps) => {
  const searchParams = await props.searchParams;
  const { userId: clerkId } = await auth();
  if (!clerkId) {
    throw new Error("User not authenticated");
  }

  // Find user by clerkId to get their _id
  const user = await User.findOne({ clerkId });
  if (!user) {
    throw new Error("User not found in database");
  }

  const ordersPage = Number(searchParams?.ordersPage) || 1;
  const eventsPage = Number(searchParams?.eventsPage) || 1;

  const orders = await getOrdersByUser({ userId: user._id, page: ordersPage });
  const orderedEvents = orders?.data.map((order: IOrder) => order.event) || [];
  // console.log("orderedEvents", orderedEvents);

  const organizedEvents = await getEventsByUser({ userId: clerkId, page: eventsPage });
  // console.log(organizedEvents);

  return (
    <>
      {/* My Tickets */}
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 px-4 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">My Tickets</h3>

          <Button asChild className="button px-6 hidden sm:flex">
            <Link href={`/#events`} className="flex flex-nowrap group">
              Explore More Events
              <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:animate-pulse" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="wrapper my-8">
        <Collection
          data={orderedEvents}
          emptyTitle="No event Tickets purchased yet 🎟️"
          emptyStateSubtext="No worries! You can explore more events below."
          collectionType="My_Tickets"
          // limit={3}
          page={ordersPage}
          urlParamName="ordersPage"
          totalPages={orders?.totalPages}
        />
      </section>

      {/* Events Organized */}
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 px-4 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">Events Organized</h3>

          <Button asChild className="button px-6 hidden sm:flex">
            <Link href={`/events/create`} className="flex flex-nowrap group">
              Create New
              <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:animate-pulse" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="wrapper my-8">
        <Collection
          data={organizedEvents?.data}
          emptyTitle="No event have been created yet"
          emptyStateSubtext="Go ahead and create your first event!"
          collectionType="Events_Organized"
          // limit={3}
          page={eventsPage}
          urlParamName="eventsPage"
          totalPages={organizedEvents?.totalPages}
        />
      </section>
    </>
  );
};

export default ProfilePage;
