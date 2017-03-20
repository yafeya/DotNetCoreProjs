using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApiDemo.Models
{
    public interface ITodoRepository
    {
        void Add(ToDoItem item);
        IEnumerable<ToDoItem> GetAll();
        ToDoItem Find(long key);
        void Remove(long key);
        void Update(ToDoItem item);
    }
}
