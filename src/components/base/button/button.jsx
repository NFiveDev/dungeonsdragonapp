import cls from './button.module.css';

const getSize = (size) => {
    const sizeMap = new Map();
    sizeMap.set('large', cls.large);
    return sizeMap.get(size);
};

const getVariant = (variant) => {
    const variantMap = new Map();
    variantMap.set('burning', cls.burning);
    return variantMap.get(variant);
};

export function Button({ children, variant, size }) {
    debugger;
    const sizeCls = getSize(size);

    const variantCls = getVariant(variant);

    return <button className={`${sizeCls} ${variantCls}`}>{children}</button>;
}
