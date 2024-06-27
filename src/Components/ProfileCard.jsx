export default function ProfileCard(props){
    return(
        <div className="flex lg:items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mt-32">
                <div
                    className="w-56 h-32 bg-sky-300 shadow-lg focus:h-96 focus:my-0 mx-0 hover:neon-blue max-[500px]focus:neon-blue rounded-md transition-all duration-300 p-4 flex flex-col"
                    tabindex="0"
                >
                    <div className="flex flex-row justify-between mt-2">
                        <img className="w-20 h-20 ring-4 ring-white rounded-lg" src={props.img} />
                        <div className="flex flex-col items-center justify-center">
                            <h2 className="[text-shadow:0_1px_0_rgb(0_0_0/_40%)] font-medium text-sm">
                                {props.name}
                            </h2>
                            <h2 className="[text-shadow:0_1px_0_rgb(0_0_0/_40%)] font-medium text-sm">
                                {props.nim}
                            </h2>
                        </div>
                    </div>
                    <div className="overflow-hidden mt-2">
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}