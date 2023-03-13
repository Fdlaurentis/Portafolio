

const Stack = ({ theme, language }) => {

    return (
        <div className="main">
            <h1 style={{ fontSize: '25px' }}>{language.Page[3]}</h1>
            <div
                className="stack"                
            >
                {
                    language?.Stacks.map((stack, index) => (
                        <div className={theme ? 'divDark' : 'divLigth'}>
                            <i className={stack.icon} key={index}></i>
                            <span>{stack.name}</span>
                        </div>
                    ))

                }
            </div>            
        </div>
    )
}

export default Stack