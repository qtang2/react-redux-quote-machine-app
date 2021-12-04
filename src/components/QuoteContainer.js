import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchQuote } from '../redux/quoteActions'

function QuoteContainer({quote, fetchQuote}) {
    useEffect(() => {
        fetchQuote()
    }, [])
    return (
        <div>
            <p>{quote[0]}</p>
            <p>hdhddh</p>
        </div>
    )
}


const mapStateToProps = (state)=>{
    return {
        quote: state.quote
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        fetchQuote: () => dispatch(fetchQuote())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(QuoteContainer)
