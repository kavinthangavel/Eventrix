import Layout from '../layout';

const ContactUs = () => {
    return (
      <Layout>
        <div className="container mx-auto p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Web3 Builders</h1>
          <p className="text-lg text-gray-600 mb-8">
            We’d love to hear from you! Whether you have a question, want to collaborate, or simply want to learn more about Web3 Builders, feel free to reach out to us through any of the channels below:
          </p>
  
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">General Inquiries</h2>
          <div className="space-y-4 text-lg text-gray-600 mb-8">
            <p>
              <span className="font-semibold">📧 Email:</span> <a href="mailto:support@web3builders.ai" className="text-blue-600">support@web3builders.ai</a>
            </p>
            <p>
              <span className="font-semibold">📞 Phone:</span> +91 99449 22952
            </p>
            <p>
              <span className="font-semibold">🌐 Website:</span> <a href="https://www.web3builders.ai" target="_blank" rel="noopener noreferrer" className="text-blue-600">www.web3builders.ai</a>
            </p>
          </div>
  
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Social Media</h2>
          <p className="text-lg text-gray-600 mb-6">
            Stay connected with us on social media for updates, events, and insights:
          </p>
          <ul className="space-y-3 text-lg text-gray-600 mb-8">
            <li><a href="https://twitter.com/Web3Builders" target="_blank" rel="noopener noreferrer" className="text-blue-600">Twitter: @Web3Builders</a></li>
            <li><a href="https://www.linkedin.com/company/web3builders" target="_blank" rel="noopener noreferrer" className="text-blue-600">LinkedIn: Web3 Builders</a></li>
            <li><a href="https://discord.gg/yourdiscordlink" target="_blank" rel="noopener noreferrer" className="text-blue-600">Discord: Join our community server for discussions and support</a></li>
            <li><a href="https://linktr.ee/Web3Builders_IN" target="_blank" rel="noopener noreferrer" className="text-blue-600">Linktr.ee</a></li>
          </ul>
  
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Office Address</h2>
          <p className="text-lg text-gray-600 mb-8">Hosur, South India</p>
  
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Support Team</h2>
          <p className="text-lg text-gray-600 mb-6">
            For technical or customer support, feel free to reach out:
          </p>
          <p className="text-lg text-gray-600 mb-8">
            <span className="font-semibold">📧 Email:</span> <a href="https://discord.gg/yourdiscordlink" className="text-blue-600">Discord Link</a>
          </p>
  
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Partnership Opportunities</h2>
          <p className="text-lg text-gray-600 mb-6">
            Interested in partnering with us? Let’s collaborate to shape the future of Web3:
          </p>
          <p className="text-lg text-gray-600 mb-8">
            <span className="font-semibold">📧 Email:</span> <a href="mailto:guhan@web3builders.ai" className="text-blue-600">guhan@web3builders.ai</a>
          </p>
  
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Media & Press</h2>
          <p className="text-lg text-gray-600 mb-6">
            For media inquiries or interview requests:
          </p>
          <p className="text-lg text-gray-600 mb-8">
            <span className="font-semibold">📧 Email:</span> <a href="mailto:business@web3builders.org.in" className="text-blue-600">business@web3builders.org.in</a>
          </p>
  
          <p className="text-lg text-gray-600">
            We’re excited to connect with you and explore how we can build a better decentralized future together!
          </p>
        </div>
      </Layout>
    );
};
  
export default ContactUs;
