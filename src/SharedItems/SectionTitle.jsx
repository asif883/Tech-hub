import '../Css/Font.css'
const SectionTitle = ({heading , subHeading}) => {
    return (
        <div className="my-4 lg:my-8 text-center">
            <h1 className="text-gray-900 font-bold text-2xl lg:text-4xl mb-2 font-barlow">{heading}</h1>
            <p className="text-gray-600 text-xs lg:text-lg font-medium max-w-2xl mx-auto">{subHeading}</p>
        </div>
    );
};

export default SectionTitle;