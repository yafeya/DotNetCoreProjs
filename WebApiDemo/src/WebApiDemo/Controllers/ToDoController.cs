using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApiDemo.Models;

namespace WebApiDemo.Controllers
{
    [Route("api/ToDo")]
    public class ToDoController : Controller
    {
        public ITodoRepository _repository;

        public ToDoController(ITodoRepository repository)
        {
            _repository = repository;
        }

        // GET api/values
        public IEnumerable<ToDoItem> Get()
        {
            var items = _repository.GetAll();
            return items;
        }

        // GET api/values/5
        [HttpGet("{id}", Name = "GetToDo")]
        public IActionResult Get(long id)
        {
            var item = _repository.Find(id);
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]ToDoItem item)
        {
            if (item == null)
            {
                return BadRequest();
            }

            _repository.Add(item);

            return CreatedAtRoute("GetTodo", new { id = item.Key }, item);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]ToDoItem item)
        {
            if (item == null || item.Key != id)
            {
                return BadRequest();
            }

            var todo = _repository.Find(id);
            if (todo == null)
            {
                return NotFound();
            }

            todo.IsComplete = item.IsComplete;
            todo.Name = item.Name;

            _repository.Update(todo);
            return new NoContentResult();
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            var todo = _repository.Find(id);
            if (todo == null)
            {
                return NotFound();
            }

            _repository.Remove(id);
            return new NoContentResult();
        }
    }
}
