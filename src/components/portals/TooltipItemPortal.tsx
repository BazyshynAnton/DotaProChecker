export default function TooltipItemPortal() {
  return (
    <div
      id="tooltip_item_portal"
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        pointerEvents: "none",
        zIndex: 9999,
      }}
    ></div>
  )
}
