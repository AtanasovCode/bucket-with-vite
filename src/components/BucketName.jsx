import BucketInput from "./BucketInput";

const BucketName = ({
    name,
    setName,
    error,
    setError,
}) => {

    const buttonStyle = "text-left text-white"

    return (
        <div className="w-full flex flex-col items-center justify-center text-white">
            <div className="text-lg font-bold mb-8 text-light">
                Bucket Name
            </div>
            <BucketInput
                error={error}
                setError={setError}
                handleChange={setName}
                value={name}
                style={buttonStyle}
                placeholder="Gaming chair"
            />
        </div >
    );
}

export default BucketName;