import React from "react";
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";
import '../Style/FAQ.css';

export default function App() {
    return (
        <div className="faq">
        <h1 className="FAQh1 underline "> Frequently Asked Questions  </h1>
        <p>"Discover Your Coding Journey: Unveiling FAQs About Our Platform's Courses, Accessibility, Interactive Features, Certification, Pricing, and Beyond!"</p>
            <MDBContainer className="FAQ-page" style={{ maxWidth: '1000px' }}>
                <MDBAccordion alwaysOpen initialActive={1}>
                    <MDBAccordionItem collapseId={1} headerTitle={<AccordionHeader number={1} title="What programming languages do you offer courses for?" />}>
                        <>We offer courses covering a wide range of programming languages, including but not limited to:
                            Python, Java, HTML/CSS, JavaScript, C++, C, SQL, React Js. Additionally, we regularly update our course offerings to include
                            emerging languages and technologies to ensure our learners have access to the latest industry-relevant content.
                        </>
                    </MDBAccordionItem>
                    <MDBAccordionItem collapseId={2} headerTitle={<AccordionHeader number={2} title="Are there interactive elements in the courses?" />}>
                        <>Yes, our courses include interactive elements such as coding challenges, quizzes, and projects to reinforce learning and enhance engagement. These interactive features provide hands-on experience and immediate feedback.
                        </>
                    </MDBAccordionItem>
                    <MDBAccordionItem collapseId={3} headerTitle={<AccordionHeader number={3} title="Are there certificates upon completion of courses?" />}>
                        <>Yes, upon successful completion of a course, you will receive a certificate of completion. This certificate validates your achievement and can be shared on your resume or LinkedIn profile to showcase your skills.
                        </>
                    </MDBAccordionItem>
                    <MDBAccordionItem collapseId={4} headerTitle={<AccordionHeader number={4} title="Are the courses suitable for beginners?" />}>
                        <>Yes, we offer courses specifically designed for beginners who are new to coding. These courses provide step-by-step guidance and cover foundational concepts to help you get started on your coding journey.
                        </>
                    </MDBAccordionItem>
                    <MDBAccordionItem collapseId={5} headerTitle={<AccordionHeader number={5} title="What sets your platform apart from others?" />}>
                        <>Our platform stands out by offering a wide array of free courses, providing accessible learning opportunities to all.
                        </>
                    </MDBAccordionItem>
                    <MDBAccordionItem collapseId={6} headerTitle={<AccordionHeader number={6} title="Can I access the courses on any device?" />}>
                        <>Yes, our platform is designed to be responsive and accessible on various devices including computers, tablets, and smartphones. You can access your courses anytime, anywhere, as long as you have an internet connection.
                        </>
                    </MDBAccordionItem>
                </MDBAccordion>
            </MDBContainer>
        </div>
    );
}

// Component to display accordion header with a circular button
const AccordionHeader = ({ number, title }) => {
    return (
        <div className="accordion-header">
            <span className="accordion-number">{number}</span>
            <span className="accordion-title">{title}</span>
        </div>
    );
};
