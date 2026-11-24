function FilterBar({
  showOnlyActive,
  onToggleActive,
  layout,
  onChangeLayout,
}) {
  return (
    <div className="filter-bar">
      <button type="button" onClick={onToggleActive}>
        {showOnlyActive
          ? 'Showing: Active Only'
          : 'Show only active members'}
      </button>

      <div className="layout-switch">
        <button
          type="button"
          className={layout === 'list' ? 'active' : ''}
          onClick={() => onChangeLayout('list')}
        >
          List
        </button>
        <button
          type="button"
          className={layout === 'grid' ? 'active' : ''}
          onClick={() => onChangeLayout('grid')}
        >
          Grid
        </button>
      </div>
    </div>
  );
}

export default FilterBar;