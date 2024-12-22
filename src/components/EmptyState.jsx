function EmptyState({ searchTerm }) {
  return (
    <div className="empty-state">
      <div className="empty-state-icon">
        <i className="fas fa-search"></i>
      </div>
      <h3>No Todos Found</h3>
      <p>No results found for "{searchTerm}"</p>
      <p className="empty-state-hint">Try adjusting your search term or filter criteria</p>
    </div>
  );
}

export default EmptyState;