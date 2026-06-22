// Единый контейнер контента: одна ширина (1600px) и одни боковые отступы (px-6 / sm:px-10)
// на всём сайте. Любую секцию оборачиваем в него, чтобы левые/правые края совпадали.
export default function Container({ as: Tag = 'div', className = '', children, ...props }) {
  return (
    <Tag className={`mx-auto w-full max-w-[1600px] px-6 sm:px-10 ${className}`} {...props}>
      {children}
    </Tag>
  )
}
