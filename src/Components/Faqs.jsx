import React from 'react';
import SectionTitle from '../SharedItems/SectionTitle';
import img from '../assets/F&Q.jpg'

const Faqs = () => {
    return (
        <div className='mt-16 container mx-auto'>
            <SectionTitle heading="Frequently Asked Questions" subHeading="There are the most Commonly asked Questions about us. Can't find what you are looking for?"/>

            <div className='flex flex-col lg:flex-row items-center gap-4'>
                 <div className='flex-1'>
                    <img className='h-[300px] lg:h-[500px]' src={img} alt="" />
                 </div>

                <div className='max-w-2xl mx-auto flex-1 space-y-3' >
                    <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl font-bold"> How can I track my order?</div>
                    <div className="collapse-content">
                        <p>You can track your order by logging into your account and navigating to the "My Orders" section. Click on the order you want to track, and you’ll find the tracking details and current status.</p>
                    </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-bold">What payment methods do you accept?</div>
                    <div className="collapse-content">
                        <p>We accept various payment methods, including credit/debit cards (Visa, MasterCard, American Express), PayPal, and online bank transfers. For specific regions, additional local payment options might be available.</p>
                    </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-bold">What is your return policy?</div>
                    <div className="collapse-content">
                        <p>We offer a 30-day return policy for most products. Items must be unused, in their original packaging, and accompanied by proof of purchase. Please visit our Returns & Refunds page for more details.</p>
                    </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-bold">How long does shipping take?</div>
                    <div className="collapse-content">
                        <p>Shipping times vary depending on your location. Typically, orders are delivered within 3-7 business days. International shipping might take longer. You’ll receive an estimated delivery date during checkout.</p>
                    </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-bold"> Can I change or cancel my order?</div>
                    <div className="collapse-content">
                        <p>You can change or cancel your order within 24 hours of placing it. Please contact our Customer Support team as soon as possible for assistance. Once your order is processed, changes or cancellations may not be possible.</p>
                    </div>
                    </div>
                </div>
            </div>

            
        </div>
    );
};

export default Faqs;