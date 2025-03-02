const Card = () => {
    return (
        <div
            style={{ width: "100%", height: "100%" }}
            className="flex flex-col bg-light p-2 gap-6"
        >
            <img
                src="https://via.placeholder.com/300x200.png?text=LC..."
                alt="Placeholder Image"
                className="m-auto object-contain"
            />
            <h4 className="font-bold">
                Commodo aliquip aute commodo aliquip culpa magna quis.
            </h4>
            <p className="text-muted text-sm">
                Aliquip eiusmod quis aliqua irure dolor ut proident excepteur
                sint nostrud voluptate aliquip tempor aliquip amet cupidatat
                magna tempor ea sit exercitation sit esse consectetur culpa.
            </p>
        </div>
    );
};
export default Card;
