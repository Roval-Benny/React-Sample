using Microsoft.AspNetCore.Mvc;

namespace ProductsAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductController : Controller
    {
        private static readonly List<Product> _products = new List<Product>
        {
            new Product { Id = 1, Name = "Keyboard", Price = 20 },
            new Product { Id = 2, Name = "Mouse", Price = 10 },
            new Product { Id = 3, Name = "Monitor", Price = 100 }
        };

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_products);
        }

        [HttpPost]
        public IActionResult Post(Product product)
        {
            product.Id = _products.Count + 1;
            _products.Add(product);
            return Ok( new { 
                products = _products,
            });
        }

        [HttpDelete]
        public IActionResult Delete(int productid)
        {
            var product = _products.FirstOrDefault(p => p.Id == productid);
            if (product == null)
            {
                return Ok(_products);
            }

            _products.Remove(product);
            return Ok(_products);
        }
    }



    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
    }
}
