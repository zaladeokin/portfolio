import '../asset/style/MainDiv.css'

function MainDiv({children, contentDiv= true}) {

    return(
        <main>
            {contentDiv ? (<div className="contentDiv">{children}</div>) : children}
        </main>
    );
}

export default MainDiv;