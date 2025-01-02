import Layout from '../layout';

const RefundAndCancellation = () => {
    return (
        <Layout>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Refund and Cancellation Policy
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          At Web3 Builders, we value your trust and strive to provide the best services and solutions. Our refund and cancellation policy ensures transparency and fairness for all users.
        </p>
  
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              1. Cancellation Policy
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              <strong>Service Subscriptions:</strong> You can cancel your subscription at any time by accessing your account settings or contacting our support team at{" "}
              <a href="mailto:support@web3builders.ai" className="text-blue-600">
                support@web3builders.ai
              </a>
              . Cancellations will be effective at the end of the current billing cycle.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              <strong>Event Registrations:</strong> Event cancellations must be requested at least 7 days before the event date for a full refund. Cancellations made within 7 days of the event will not be eligible for a refund.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              <strong>Project Agreements:</strong> For custom Web3 development or consulting services, cancellation terms will be outlined in the signed contract. Please refer to your agreement for specific details.
            </p>
          </div>
  
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              2. Refund Policy
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              <strong>Eligibility for Refunds:</strong> Refunds are applicable only for unused services or in cases where the service provided does not meet agreed-upon standards. Refund requests must be submitted within 14 days of the service purchase or issue occurrence.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              <strong>Subscription Services:</strong> Refunds will be provided on a pro-rata basis for cancellations made within the first half of the subscription period. No refunds are provided for cancellations made during the latter half.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              <strong>Event Fees:</strong> If an event is canceled by Web3 Builders, registrants will receive a full refund.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              <strong>Custom Services:</strong> For project-based services, refunds will be evaluated on a case-by-case basis depending on the stage of project completion.
            </p>
          </div>
  
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              3. How to Request a Refund or Cancellation
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              <strong>Email Us:</strong> Send your request to{" "}
              <a href="mailto:support@web3builders.ai" className="text-blue-600">
                support@web3builders.ai
              </a>{" "}
              with the following details:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Your name and contact information.</li>
              <li>Invoice or subscription ID.</li>
              <li>Reason for cancellation or refund request.</li>
            </ul>
            <p className="text-lg text-gray-600 mb-4">
              <strong>Response Time:</strong> Our team will review your request and respond within 5 business days.
            </p>
          </div>
  
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              4. Non-Refundable Items
            </h2>
            <ul className="list-disc pl-6 text-lg text-gray-600 mb-4">
              <li>One-time setup fees or consultation fees.</li>
              <li>Completed and delivered projects or services.</li>
              <li>Missed events or workshops due to personal reasons.</li>
            </ul>
          </div>
  
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              5. Exceptions
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Refunds and cancellations for exceptional cases (e.g., payment errors or technical glitches) will be addressed promptly and resolved to your satisfaction.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              For any further clarification, feel free to contact our support team. We’re here to help!
            </p>
          </div>
        </div>
      </div>
      </Layout>
    );
  };
  
  export default RefundAndCancellation;
