interface GridProps{
    children?: React.ReactElement
}

export default function Grid({children}: GridProps){
    return (
        <div className={`flex flex-col w-[95%] lg:w-[85%] mx-auto`}>
            {children}
        </div>
    )
}