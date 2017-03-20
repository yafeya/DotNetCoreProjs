using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApiDemo.Models
{
    public class TodoRepository: ITodoRepository
    {
        private ConcurrentDictionary<long, ToDoItem> _context = new ConcurrentDictionary<long, ToDoItem>();

        public TodoRepository()
        {
            Add(new ToDoItem { Name = "Item1" });
        }

        public IEnumerable<ToDoItem> GetAll()
        {
            return _context.Values;
        }

        public void Add(ToDoItem item)
        {
            _context[item.Key] = item;
        }

        public ToDoItem Find(long key)
        {
            ToDoItem item = null;
            if (_context.ContainsKey(key))
            {
                item = _context[key];
            }
            return item;
        }

        public void Remove(long key)
        {
            if (_context.ContainsKey(key))
            {
                ToDoItem item;
                _context.TryRemove(key, out item);
            }
        }

        public void Update(ToDoItem item)
        {
            if (item != null)
            {
                _context.AddOrUpdate(item.Key, item, (k, i) => _context[k] = i);
            }
        }
    }
}
