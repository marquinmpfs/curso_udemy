import React, { Component } from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { init } from './billingCycleActions'
import LabelAndInput from '../common/form/labelAndInput'
import CreditList from './creditList'

class BillingCycleForm extends Component {

    render() {
        const {handleSubmit, readOnly, credits} = this.props
        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name='name' component={LabelAndInput} label='Nome' cols='12 4' readOnly={readOnly} placeholder='Informe o nome'/>
                    <Field name='month' component={LabelAndInput} type='number' label='Mês' readOnly={readOnly} cols='12 4' placeholder='Informe o mês'/>
                    <Field name='year' component={LabelAndInput} type='number' label='Ano' readOnly={readOnly} cols='12 4' placeholder='Informe o ano'/>
                    <CreditList cols='12 6' list={credits} readOnly={readOnly}/>
                </div>
                <div className="box-footer">
                    <button type="submit" className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                    <button type="button" className="btn btn-default" onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

const selector = formValueSelector('billingCycleForm')
const mapStateToProps = state => ({credits:selector(state, 'credits')})
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)