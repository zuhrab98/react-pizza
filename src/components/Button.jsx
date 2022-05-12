import classNames from "classnames"

export function Button({ outline, className, children }) {
    return (
        <button className={classNames('button', className)}>{children}</button>
    )
}