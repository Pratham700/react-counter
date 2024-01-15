function Button({color, text, onCLick}) {
    return (
        <>
            <button className="outline-none px-4 py-1 rounded-full"
                    onClick={onCLick}
                    style={{backgroundColor: color}}>{text}
            </button>
        </>
    )
}

export default Button