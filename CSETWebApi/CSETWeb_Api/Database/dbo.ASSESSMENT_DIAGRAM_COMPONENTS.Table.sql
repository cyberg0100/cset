USE [CSETWeb]
GO
/****** Object:  Table [dbo].[ASSESSMENT_DIAGRAM_COMPONENTS]    Script Date: 11/14/2018 3:57:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ASSESSMENT_DIAGRAM_COMPONENTS](
	[Assessment_Id] [int] NOT NULL,
	[Diagram_Component_Type] [varchar](100) NOT NULL,
 CONSTRAINT [PK_ASSESSMENT_DIAGRAM_COMPONENTS] PRIMARY KEY CLUSTERED 
(
	[Assessment_Id] ASC,
	[Diagram_Component_Type] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO