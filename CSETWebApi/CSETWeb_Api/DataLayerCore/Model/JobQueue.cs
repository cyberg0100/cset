﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DataLayerCore.Model
{
    [Table("JobQueue", Schema = "HangFire")]
    public partial class JobQueue
    {
        public int Id { get; set; }
        public int JobId { get; set; }
        [Required]
        [StringLength(50)]
        public string Queue { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? FetchedAt { get; set; }
    }
}
