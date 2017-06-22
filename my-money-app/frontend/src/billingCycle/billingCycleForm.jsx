import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { init } from './billingCycleActions'
import labelAndInput from '../common/form/labelAndInput'
import CreditList from './creditList'

class BillingCycleForm extends Component {

    render() {
        const {handleSubmit, readOnly} = this.props
        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name='name' component={labelAndInput} label='Nome' cols='12 4' readOnly={readOnly} placeholder='Informe o nome'/>
                    <Field name='month' component={labelAndInput} type='number' label='Mês' readOnly={readOnly} cols='12 4' placeholder='Informe o mês'/>
                    <Field name='year' component={labelAndInput} type='number' label='Ano' readOnly={readOnly} cols='12 4' placeholder='Informe o ano'/>
                    <CreditList cols='12 6' />
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

const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)
export default connect(null, mapDispatchToProps)(BillingCycleForm)