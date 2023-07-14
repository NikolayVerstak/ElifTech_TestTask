export default function Loading() {
    return (
        <div className="loader-wrapper">
            <div className="loader">
                {[1, 2, 3].map((num, i) => {
                    return <div key={i} className={`box-load${num}`}></div>;
                })}
            </div>
        </div>
    );
}
