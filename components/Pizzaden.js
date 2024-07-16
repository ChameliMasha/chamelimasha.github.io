import React from "react";
import pizzaden_home from "../assets/pizzaden_home.jpg";

const PizzaDen = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-6 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
            Pizza Den: Online Food Ordering System
          </h2>

          <section className="mb-8">
            <h3 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
              Overview
            </h3>
            <p className="mb-4 font-light">
              Pizza Den is a medium-scale pizza shop dedicated to enhancing
              customer satisfaction and boosting sales through an innovative
              online food ordering system. This user-friendly and efficient web
              application enables customers to place orders, make payments, and
              track deliveries in real-time. Additionally, the system includes a
              robust backend for managing orders, inventory, and customer
              feedback, ensuring a comprehensive solution for both customers and
              shop operators.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
              Account Creation and Login
            </h3>
            <p className="mb-4 font-light">
              Pizza Den's online food ordering system starts with a
              straightforward account creation and login process. By using
              Google Authentication, customers can quickly and securely log in
              to the website using their existing Google accounts. This
              integration with the Google Account API ensures that user data is
              protected, providing a seamless and efficient login experience
              without the need for additional passwords.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
              Dashboard Overview
            </h3>

            <p className="mb-4 font-light">
              Upon logging in, customers are greeted with a user-friendly
              dashboard that offers easy navigation and access to various
              functionalities. The dashboard is designed to provide a clear
              overview of available features, making it simple for customers to
              browse the menu, place orders, and track deliveries. For shop
              operators, the admin panel within the dashboard provides
              comprehensive tools to view and manage customer details, sales
              data, and product inventory. This organized layout ensures
              efficient operations and timely order management.
            </p>
            <div className="hero-img flex justify-center md:justify-center items-center py-5">
              <img
                src={pizzaden_home}
                alt="Home page"
                className="mt-6"
                style={{ width: "700px", height: "auto" }}
              />
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
              Features
            </h3>
            <p className="mb-4 font-light">
              The Pizza Den online ordering system offers a range of features
              designed to improve the customer experience and streamline shop
              operations. Customers can browse the menu, select items, and place
              orders directly from the website. They can also track their orders
              in real-time, from preparation to delivery, ensuring transparency
              and reliability. Secure payment options are integrated to provide
              a smooth and safe checkout process. An integrated feedback system
              allows customers to share their experiences and complaints,
              helping Pizza Den continuously improve its services. For shop
              owners, the admin panel provides comprehensive tools to view and
              manage customer details, sales data, and product inventory. Shop
              operators can handle and update the status of orders efficiently,
              ensuring timely deliveries and customer satisfaction. The menu is
              organized into categories for easy navigation, making it simple
              for customers to find their favorite dishes.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
              Technologies Used
            </h3>
            <p className="mb-4 font-light">
              The development of the Pizza Den online ordering system leveraged
              modern web technologies to ensure a high-quality, scalable, and
              maintainable solution. The frontend of the application was built
              using React and Tailwind CSS, providing a responsive and visually
              appealing user interface. Redux was employed for efficient state
              management across the application. The backend was developed with
              Node.js, offering a robust and scalable server environment. For
              the database, MongoDB was used to store and manage data securely
              and efficiently. The entire system is hosted on AWS, ensuring high
              availability and reliability.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
              Contact
            </h3>
            <p className="mb-4 font-light">
              For any inquiries or further information, please contact:
            </p>
            <p className="mb-4 font-light">
              Email:{" "}
              <a
                href="mailto:your-email@example.com"
                className="text-blue-500 hover:underline dark:text-blue-400"
              >
                your-email@example.com
              </a>
            </p>
            <p className="mb-4 font-light">
              LinkedIn:{" "}
              <a
                href="#"
                className="text-blue-500 hover:underline dark:text-blue-400"
              >
                Your LinkedIn Profile
              </a>
            </p>
            <p className="mb-4 font-light">Phone: (123) 456-7890</p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default PizzaDen;
