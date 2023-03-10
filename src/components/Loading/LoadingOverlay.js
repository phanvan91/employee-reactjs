const LoadingOverlay = () => (
  <div className="loading-over">
    <div className="lds-ripple">
      <div className="lds-pos"></div>
      <div className="lds-pos"></div>
    </div>
  </div>
)

export default LoadingOverlay

LoadingOverlay.defaultProps = {
}

LoadingOverlay.propTypes = {
}
