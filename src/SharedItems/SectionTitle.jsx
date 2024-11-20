
const SectionTitle = ({heading , subHeading}) => {
    return (
        <div className="my-4 lg:my-8 text-center">
            <h1 className="text-orange-400 font-semibold text-2xl lg:text-4xl mb-2">{heading}</h1>
            <p className="text-gray-500 text-xs lg:text-lg font-medium">{subHeading}</p>
        </div>
    );
};

export default SectionTitle;