using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApiDemo.Models
{
    public class ToDoItem
    {
        public long Key { get; set; }
        public string Name { get; set; }
        public bool IsComplete { get; set; }
    }
}
