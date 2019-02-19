﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DataLayerCore.Model
{
    [Table("List", Schema = "HangFire")]
    public partial class List
    {
        public int Id { get; set; }
        [Required]
        [StringLength(100)]
        public string Key { get; set; }
        [Column(TypeName = "nvarchar(max)")]
        public string Value { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? ExpireAt { get; set; }
    }
}
