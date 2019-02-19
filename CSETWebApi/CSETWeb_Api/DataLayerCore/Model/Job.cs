﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DataLayerCore.Model
{
    [Table("Job", Schema = "HangFire")]
    public partial class Job
    {
        public Job()
        {
            JobParameter = new HashSet<JobParameter>();
            State = new HashSet<State>();
        }

        public int Id { get; set; }
        public int? StateId { get; set; }
        [StringLength(20)]
        public string StateName { get; set; }
        [Required]
        public string InvocationData { get; set; }
        [Required]
        public string Arguments { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime CreatedAt { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? ExpireAt { get; set; }

        [InverseProperty("Job")]
        public virtual ICollection<JobParameter> JobParameter { get; set; }
        [InverseProperty("Job")]
        public virtual ICollection<State> State { get; set; }
    }
}
