using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TodoApi.Data;
using TodoApi.Models;

namespace TodoApi.Controllers{

    [ApiController]
    [Route("api/[controller]")]
    public class TasksController : ControllerBase {
        private readonly TodoContext _context;
        public TasksController(TodoContext context){
            _context = context;
        }

        // GET api/tasks
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TaskItem>>> GetTasks(){
            return await _context.Tasks.ToListAsync();
        }

        // GET api/tasks/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TaskItem>> GetTask(int id){
            var task = await _context.Tasks.FindAsync(id);

            if(task == null){
                return NotFound();
            }

            return task;
        }

        // POST api/tasks/5
        [HttpPost]
        public async Task<ActionResult<TaskItem>> CreateTask(TaskItem task){
            _context.Tasks.Add(task);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetTask), new { id = task.Id }, task);
        }

        // PUT api/tasks/5
        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateTask(int id, TaskItem task){
            if (id != task.Id) {
                return BadRequest();
            }


            _context.Entry(task).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }


        // DELETE
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTask(int id){
            var task = await _context.Tasks.FindAsync(id);

            if(task == null){
                return NotFound();
            }

            _context.Tasks.Remove(task);
            await _context.SaveChangesAsync();

            return NoContent();
        }

    }
}