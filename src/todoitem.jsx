export function todoItem(completed, id, title, toggle, remove) {
  return (
    <div>
        <li className="list-item">
            <input checked={completed} type="checkbox" data-list-item-checkbox onChange={e => toggle(id, e.target.checked)} />
            <span style={{textDecoration: completed ? 'line-through' : 'none'}}>{title}</span>
            <button onClick={() => remove(id)} data-list-item-remove-button>Remove</button>
        </li>
    </div>
  );
}