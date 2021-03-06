package com.loeo.schedule.core.executor;

import com.loeo.schedule.core.JobData;
import com.loeo.schedule.domain.entity.ScheduleJob;
import com.loeo.schedule.domain.entity.ScheduleTrigger;

/**
 * 功能：
 *
 * @author ：Tony.L(286269159@qq.com)
 * @create ：2017-11-17 18:15:57
 * @version ：2017 Version：1.0

 */
public class HelloJobExecutor implements JobExecutor {

	@Override
	public String execute(JobData jobData) {
		ScheduleJob scheduleJob = (ScheduleJob) jobData.getJobData();
		ScheduleTrigger scheduleTrigger = (ScheduleTrigger) jobData.getCurrentTriggerData();
		System.out.println("===========================执行任务："+scheduleJob.getName()+"===========================");
		return "Hello JobExecutor";
	}
}
